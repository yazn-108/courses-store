import { EmailTemplate } from '@/app/_components/email-template';
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
export const POST = async (req) => {
  try {
    const body = await req.json();
    const { userName, userEmail } = body;
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [userEmail],
      subject: 'Courses Store',
      react: EmailTemplate({ firstName: userName }),
    });
    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}