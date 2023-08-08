import { EmailTemplate } from '@/components/templates/Email';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const BodySchema = z.object({
    name: z.string().nonempty('Seu Nome é obrigatório!'),
    email: z.string().nonempty('Seu Email é obrigatório!').email('Por favor, insira um email válido.'),
    message: z.string().nonempty('A mensagem não pode ficar em branco.').min(10, 'A mensagem deve ter pelo menos 10 caracteres.'),
  })

  const body = BodySchema.parse(await request.json());

  try {
    await resend.emails.send({
      from: 'Portfolio Resend <onboarding@resend.dev>',
      to: ['leonardo.tech7@proton.me'],
      subject: 'Você recebeu uma nova mensagem! 👋',
      react: EmailTemplate({
        name: `${body.name}`,
        email: `${body.email}`,
        message: `${body.message}`,
      }),
    });

    return new NextResponse(JSON.stringify({
      status: 200,
      success: true,
      response: 'O Email foi enviado com sucesso!',
     }));
  } catch (error) {
    return new NextResponse(JSON.stringify(error));
  }
}
