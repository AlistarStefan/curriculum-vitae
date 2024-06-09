import { Button } from "@mui/material";

type HeaderCardProps = {
  name: string;
  refName: any;
};

function HeaderCard({ name, refName }: HeaderCardProps) {
  return (
    <>
      <Button sx={{ color: "#fff" }} onClick={() => {
        refName.current?.scrollIntoView({
          behavior: "smooth"
        })
      }}>{name}</Button>
    </>
  );
}

export default HeaderCard;
