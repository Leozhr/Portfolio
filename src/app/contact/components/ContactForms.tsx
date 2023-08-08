import { theme } from '@/styles';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import zod from 'zod';

import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';


const ContactFormsStyle = styled.div`
  padding: 80px 20px 40px;

  h1 {
    font-size: 26px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 30px;

    span {
      color: ${theme.color.flare};
    }
  }

  form {
    display: flex;
    gap: 20px;
    flex-direction: column;

    div {
      display: flex;
      gap: 3px;
      flex-direction: column;
      width: 100%;

      p {
        font-family: ${theme.font.family.jakarta};
        font-size: 12px;
        color: #ca1111;
      }
    }

    input, textarea {
      padding: 15px 20px;
      background-color: #E1E1E1;
      outline: none;
      border: none;
      font-size: 16px;
      resize: none;

      &::placeholder {
        color: ${theme.color.flare};
      }
    }

    button {
      content: 'olaaa';
      padding: 15px 20px;
      background-color: ${theme.color.dark};
      color: ${theme.color.light};
      text-transform: uppercase;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      border-radius: 50px;

      & .loading {
        display: none;
        filter: invert(1);
      }
    }
  }

  @media (min-width: 1027px) {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

  h1 {
    font-size: 32px;
  }

  form { 
    width: 80%;

    div {
      gap: 5px;

      p {
        font-size: 14px;
      }
    }

    input, textarea {
      font-size: 18px;

      &::placeholder {
        font-family: ${theme.font.family.poppins};
      }
    }

    button {
      font-size: 18px;

      &:hover {
        background-color: ${theme.color.hidden};
      }
    }
  }
}

 @media (min-width: 1650px) {
   h1 {
     font-size: 42px;
   }

   form {
     width: 65%;

     button {
       width: 60%;
       margin-top: 20px;
       padding: 20px;
       margin: 20px auto 0px auto;
     }

     input, textarea {
       font-size: 20px;
       padding: 20px;
       border-radius: 5px;
     }
   }
 }
`

const ContactForms = () => {
  const [ formData, setFormData ] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const dataSchema = zod.object({
    name: zod.string().nonempty('Seu Nome é obrigatório!'),
    email: zod.string().nonempty('Seu Email é obrigatório!').email('Por favor, insira um email válido.'),
    message: zod.string().nonempty('A mensagem não pode ficar em branco.').min(10, 'A mensagem deve ter pelo menos 10 caracteres.'),
  })

  const { register, handleSubmit, formState: { errors }, control } = useForm<CreateUserFormData>({
    resolver: zodResolver(dataSchema),
  })

  type CreateUserFormData = zod.infer<typeof dataSchema> 

  const onSubmit = async (data: any) => {
    try {
      await fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
      console.log({ error: error });
      toast('Ops, algo deu errado, tente novamente mais tarde', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }

    setFormData({
      name: '',
      email: '',
      message: '',
    });

    toast('Mensagem enviada com sucesso!', {
      position: "top-right",
      style: {
        background: 'white',
        fontFamily: 'Poppins, sans-serif',
        color: '#141414',
        fontSize: '14px',
      },
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  return (
    <ContactFormsStyle>
      <h1>Contate <span>me</span></h1>

      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="text" placeholder="Nome" {...register('name')} value={formData.name} onChange={handleChange} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <input type="text" placeholder="E-mail" {...register('email')} value={formData.email} onChange={handleChange} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
        <Controller
        name="message"
        control={control}
        defaultValue=""
        render={({ field }) => (
        <>
          <textarea
            {...field}
            rows={5}
            cols={50}
            placeholder="Mensagem"
            value={formData.message}
            onChange={(e: any) => {
              field.onChange(e);
              handleChange(e);
            }}
          />
          {errors.message && <p>{errors.message.message}</p>}
          </>
          )} />
        </div>

        <button type="submit">Enviar</button>
      </form>

      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light" />
    </ContactFormsStyle>
  )
}

export { ContactForms };

