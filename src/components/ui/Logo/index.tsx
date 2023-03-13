import Image from "next/image";

export default function Logo({ ...rest }) {
  return (
    <Image
      {...rest}
      style={{ objectFit: "contain" }}
      src="//static-public.klickpages.com.br/uploads/media/file/5676112/whatsapp_image_2023-01-16_at_8.36.55_pm.jpeg"
      data-src="//static-public.klickpages.com.br/uploads/media/file/5676112/whatsapp_image_2023-01-16_at_8.36.55_pm.jpeg"
      alt="Logo da Nutri Tamires Manduca"
      width="150"
      height="50"
    />
  );
}
