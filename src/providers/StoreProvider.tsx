// "use client";

// // import Loading from "@/components/ui/loading";
// // import { AppStore, makeStore } from "@/redux/store";
// import { ReactNode } from "react";
// import Providers from "./Providers";
// // import { Provider } from "react-redux";
// // import { persistStore } from "redux-persist";
// // import { PersistGate } from "redux-persist/integration/react";

// export default function StoreProvider({ children }: { children: ReactNode }) {
//   //   const storeRef = useRef<AppStore>(undefined);

//   //   if (!storeRef.current) {
//   //     storeRef.current = makeStore();
//   //   }

//   //   const persistedStore = persistStore(storeRef.current);

//   return (
//     <Providers>
//       {/* <PersistGate loading={<Loading />} persistor={persistedStore}> */}
//       {children}
//       {/* </PersistGate> */}
//     </Providers>
//   );
// }
