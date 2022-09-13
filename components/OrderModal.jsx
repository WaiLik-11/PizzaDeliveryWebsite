import { useState } from "react";
import { useRouter } from "next/router";
import { Modal, useMantineTheme } from "@mantine/core";
import css from "../styles/OrderModel.module.css";
import { useStore } from "../store/store";
import { createOrder } from "../lib/orderHandler";
import toast, { Toaster } from "react-hot-toast";

export default function OrderModal({ opened, setOpened, PaymentMethod }) {
  const [FormData, setFormData] = useState({});
  const theme = useMantineTheme();
  const router = useRouter();
  const total = typeof window !== "undefined" && localStorage.getItem("total");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = await createOrder({ ...FormData, total, PaymentMethod });
    toast.success("Order is Placed !");
    resetCart();
    {
      typeof window !== "undefined" && localStorage.setItem("order", id);
    }

    router.push(`/order/${id}`);
  };

  const handleInput = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const resetCart = useStore((state) => state.resetCart);

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={opened}
      onClose={() => setOpened(null)}
    >
      {/* Modal COntent */}
      <form className={css.formContainer} action="" onSubmit={handleSubmit}>
        <input
          onChange={handleInput}
          type="text"
          name="name"
          required
          placeholder="Name"
        />
        <input
          onChange={handleInput}
          type="text"
          name="phone"
          required
          placeholder="Phone Number"
        />
        <textarea
          onChange={handleInput}
          name="address"
          rows={3}
          placeholder="Address"
        ></textarea>

        {PaymentMethod === 0 ? (
          <span style={{ textalign: "justify" }}>
            You will pay <span>RM {total}</span> on delivery. <br />
            <br />
            Please pay the exact amout as our riders will not have much change.
          </span>
        ) : (
          <span style={{ textalign: "justify" }}>
            You have paid <span>RM {total}</span> via online payment. <br />
            <br />
            Please kindly fill up the form for us to deliver to your doorstep easily.
            <br /><br />
            Thank you for your payment, your pizza will be delivered soon.
          </span>
        )}

        <button type="submit" className="btn">
          Place Order
        </button>
      </form>
      <Toaster />
    </Modal>
  );
}
