import Button from "atoms/Button";
import Input from "atoms/Input";
import axios from "axios";
import { toast } from "react-toastify";
import { UserModel } from "interfaces/models/User";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { errorConfig, acceptConfig } from "constants/toast";
import { setToken } from "helpers/token";

export const Container = styled.div`
    .login-container {
        background-color: ${({ theme }) => theme.gray6};
    }
`;

const Login: React.FC = () => {
    const { handleSubmit, register } = useForm<UserModel>();
    const onSubmit = useCallback(async (body: UserModel) => {
        const id = toast.loading("Publicando");
        try {
            const { data: response } = await axios.post(
                "/api/auth/signin",
                body,
            );

            setToken(response.token);

            toast.update(id, {
                render: `Bem vindo ${response?.user?.name}`,
                ...acceptConfig,
            });
        } catch (err: any) {
            toast.update(id, { render: err.response.data, ...errorConfig });
            console.log();
        }
    }, []);
    return (
        <Container className="w-full h-full flex justify-center items-center">
            <form
                className="px-12 pt-12 pb-10 login-container rounded-lg grid grid-cols-1 gap-8"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    register={register}
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    name="password"
                    register={register}
                />
                <Button className="py-2" type="submit">
                    Entrar
                </Button>
            </form>
        </Container>
    );
};

export default Login;
