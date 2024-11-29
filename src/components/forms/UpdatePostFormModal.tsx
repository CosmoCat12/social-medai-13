import { useEffect, useState } from "react";
import Modal from "react-modal";
import { Button, Input } from "../UI";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUpdatePostMutation } from "../../store/api/postApi";
import * as yup from "yup";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const schema = yup.object({
  newPostText: yup.string().required("Обязательное поле"),
});

interface IUpdatePostForm {
  newPostText: string;
}

export const UpdatePostFormModal = ({ postId }: { postId: number }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
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

  // const userId = localStorage.getItem("userId");
  // const userIdNumber = Number(userId);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  const [updatePost, { data, isLoading }] = useUpdatePostMutation();

  useEffect(() => {
    if (data?.status === 1) {
      closeModal();
    }
  }, [data]);

  // console.log("data", data);

  const onSubmit: SubmitHandler<IUpdatePostForm> = (data) => {
    updatePost({ post_id: postId, new_text: data.newPostText });
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
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
          <Button text={"Подтвердить"} type={"submit"} isLoading={isLoading} />
          <Button text={"Закрыть"} type={"submit"} onClick={closeModal} />
        </form>
      </Modal>
    </div>
  );
};
