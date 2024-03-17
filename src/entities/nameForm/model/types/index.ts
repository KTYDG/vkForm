import {object, string, InferType} from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const ageFormSchema = object({
    name:
      string()
      .required("Введите имя")
      .matches(/^[a-zA-Zа-яА-Я]+$/, "Имя должно состоять только из букв"),
  })
  .required();

export const ageFormResolver = yupResolver(ageFormSchema)

export type AgeFormData = InferType<typeof ageFormSchema>;