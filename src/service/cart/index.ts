/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { cookies } from "next/headers";
export interface IOrder {
  products: IOrderProduct[];
  coupon?: string;
  shippingAddress: string;
  paymentMethod: string;
}

export interface IOrderProduct {
  product: string;
  quantity: number;
  color: string;
}

export interface ICoupon {
  shopId: string;
  subTotal: number;
  couponCode: string;
}

export const createOrder = async (order: IOrder) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/order`, {
      method: "POST",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });

    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const addCoupon = async (
  couponCode: string,
  subTotal: number,
  shopId: string
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/coupon/${couponCode}`,
      {
        method: "POST",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderAmount: subTotal, shopId }),
      }
    );

    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};
