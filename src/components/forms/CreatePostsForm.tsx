import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Button, Input } from "../UI";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCreatePostMutation } from "../../store/api/postApi";
import { useEffect, useState } from "react";

const schema = yup.object({
  newPostText: yup.string().required("Обязательное поле"),
});

interface ICreatePostForm {
  newPostText: string;
}

const CreatePostsForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      newPostText: "",
    },
  });

  const [createPost, { data, isLoading }] = useCreatePostMutation();

  const userId = localStorage.getItem("userId");
  const userIdNumber = userId ? Number(userId) : undefined;

  const [isSucces, setIsSuccess] = useState<boolean>();

  useEffect(() => {
    if (data?.status === 0) {
      alert("Ошибка при создании поста, попробуйте позже");
    }
    if (data?.status === 1) {
      alert("Пост создан успешно");
    }
    
  }, [data]);

  const onSubmit: SubmitHandler<ICreatePostForm> = (data) => {
    createPost({ main_text: data.newPostText, user_id: Number(userIdNumber) });
  };
  return (
    <div className="WhatsNew">
      <img src="/img/users/arina-volkova.jpeg" alt="User" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="newPostText"
          render={({ field }) => (
            <Input
              type={"text"}
              placeholder={"Введите текст поста"}
              isError={errors.newPostText ? true : false}
              errorMessage={errors.newPostText?.message}
              {...field}
            />
          )}
        />
        <Button text={"Создать пост"} type={"submit"} isLoading={isLoading} />
      </form>
    </div>
  );
};

export default CreatePostsForm;
