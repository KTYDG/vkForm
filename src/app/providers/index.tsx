import RouterProvider from "./RouterProvider";
import ReactQueryProvider from "./ReactQueryProvider";
import VKUIProvider from "./VKUIProvider";

function Providers() {
  return (
    <ReactQueryProvider>
      <VKUIProvider>
        <RouterProvider />
      </VKUIProvider>
    </ReactQueryProvider>
  );
}

export default Providers;
