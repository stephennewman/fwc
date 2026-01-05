import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Email addresses
const BUSINESS_EMAIL = 'faheyswc@gmail.com';
const FROM_EMAIL = 'Fahey\'s Window Cleaning <noreply@faheyswc.com>';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Service label mapping
    const serviceLabels: Record<string, string> = {
      residential: 'Residential Window Cleaning',
      commercial: 'Commercial Window Cleaning',
      both: 'Both Residential & Commercial',
      other: 'Other / Not Sure',
    };
    const serviceLabel = service ? serviceLabels[service] || service : 'Not specified';

    // 1. Send internal notification email to business
    await resend.emails.send({
      from: FROM_EMAIL,
      to: BUSINESS_EMAIL,
      subject: `🧼 New Quote Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1a5d1a; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">New Quote Request</h1>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #1a5d1a; margin-top: 0;">Contact Details</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold; width: 120px;">Name:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">
                  <a href="mailto:${email}" style="color: #1a5d1a;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold;">Phone:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">
                  ${phone ? `<a href="tel:${phone}" style="color: #1a5d1a;">${phone}</a>` : 'Not provided'}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold;">Service:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">${serviceLabel}</td>
              </tr>
            </table>
            
            <h3 style="color: #1a5d1a; margin-top: 25px;">Message</h3>
            <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #ddd;">
              ${message.replace(/\n/g, '<br>')}
            </div>
            
            <div style="margin-top: 25px; padding: 15px; background: #e8f5e9; border-radius: 8px;">
              <strong>Quick Actions:</strong><br>
              ${phone ? `<a href="tel:${phone}" style="color: #1a5d1a; margin-right: 15px;">📞 Call Customer</a>` : ''}
              <a href="mailto:${email}" style="color: #1a5d1a;">✉️ Reply via Email</a>
            </div>
          </div>
          
          <div style="padding: 15px; background: #333; color: #999; text-align: center; font-size: 12px;">
            Submitted via FaheysWC.com contact form
          </div>
        </div>
      `,
    });

    // 2. Send confirmation email to customer
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: `Thanks for contacting Fahey's Window Cleaning!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1a5d1a; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">Thank You, ${name}!</h1>
          </div>
          
          <div style="padding: 30px;">
            <p style="font-size: 16px; line-height: 1.6;">
              We've received your message and appreciate you reaching out to Fahey's Window Cleaning!
            </p>
            
            <div style="background: #f0f9f0; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #1a5d1a;">
              <strong style="color: #1a5d1a;">What happens next?</strong>
              <p style="margin: 10px 0 0 0; color: #333;">
                We'll review your request and get back to you within 24 hours (usually much faster!) to discuss your window cleaning needs and provide a free quote.
              </p>
            </div>
            
            <h3 style="color: #1a5d1a;">Your Request Summary</h3>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 8px;">
              <p style="margin: 5px 0;"><strong>Service:</strong> ${serviceLabel}</p>
              <p style="margin: 5px 0;"><strong>Message:</strong> ${message.substring(0, 200)}${message.length > 200 ? '...' : ''}</p>
            </div>
            
            <div style="margin-top: 30px; padding: 20px; background: #f9f9f9; border-radius: 8px; text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: bold;">Need to reach us sooner?</p>
              <a href="tel:7272787045" style="display: inline-block; background: #1a5d1a; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                📞 Call (727) 278-7045
              </a>
            </div>
            
            <p style="margin-top: 30px; color: #666; font-size: 14px;">
              Best regards,<br>
              <strong style="color: #1a5d1a;">Fahey's Window Cleaning</strong><br>
              Palm Harbor, FL
            </p>
          </div>
          
          <div style="padding: 15px; background: #333; color: #999; text-align: center; font-size: 12px;">
            <p style="margin: 0;">Fahey's Window Cleaning | Palm Harbor, FL</p>
            <p style="margin: 5px 0 0 0;">
              <a href="https://faheyswc.com" style="color: #4aa8d8;">FaheysWC.com</a>
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

