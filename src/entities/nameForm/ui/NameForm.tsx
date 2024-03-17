import { Controller, useForm } from "react-hook-form";
import { getAgeByName } from "~shared/api/nameForm";
import { useMutation, useQueryClient } from "react-query";
import { AgeFormData, ageFormResolver } from "../model/types";
import { Button, FormItem, Group, Input, Text } from "@vkontakte/vkui";

function NameForm() {
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: ageFormResolver,
  });

  const { data, mutate, isLoading } = useMutation(
    ["age", (data: AgeFormData) => data.name],
    async ({ signal, name }: { signal: AbortSignal; name: string }) => {
      const response = await getAgeByName(name, signal);
      return response;
    },
    {
      onSuccess: (data, variables) => {
        queryClient.setQueryData(["age", variables.name], data);
      },
    }
  );

  const onSubmit = handleSubmit((formData) => {
    if (data?.name !== formData.name) {
      const controller = new AbortController();
      mutate({ signal: controller.signal, name: formData.name });
    }
  });

  return (
    <Group>
      <form className="" onSubmit={onSubmit}>
        {/* Не понял как пофиксить ошибку рефа */}
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <FormItem
              htmlFor="name"
              top="Ваше имя"
              status={errors.name?.message !== undefined ? "error" : "default"}
              bottom={errors.name?.message}
            >
              <Input
                type="text"
                id="name"
                placeholder="Введите имя"
                {...field}
              />
            </FormItem>
          )}
        />
        <FormItem>
          <Button type="submit" size="l" stretched loading={isLoading}>
            Получить возраст
          </Button>
        </FormItem>
      </form>
      <div className="p-4">
        <Text weight="3">{"Возраст: " + (data?.age ?? "")}</Text>
      </div>
    </Group>
  );
}

export default NameForm;
