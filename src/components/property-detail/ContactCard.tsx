import { Card, CardContent, Stack, Typography, Avatar, Divider, Link, type SxProps } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import avatarImg from "../../assets/tomas.webp";

type ContactCardProps = {
  name: string;
  title: string;
  email: string;
  phone: string;
  sx?: SxProps;
};

export const ContactCard = ({ name, title, email, phone, sx }: ContactCardProps) => {
  return (
    <Card
      sx={{
        bgcolor: "grey.900",
        color: "white",
        borderRadius: 2,
        p: 1,
        // maxWidth: 320,
        width: "100%",
        ...sx,
      }}
    >
      <CardContent sx={{ width: "100%" }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar src={avatarImg} alt={name} sx={{ width: 56, height: 56 }} />
          <Stack>
            <Typography variant="subtitle1" fontWeight="bold">
              {name}
            </Typography>
            <Typography variant="body2" color="grey.400">
              {title}
            </Typography>
          </Stack>
        </Stack>

        <Divider sx={{ my: 1, borderColor: "grey.800" }} />

        <Stack spacing={1}>
          <Stack direction="row" spacing={1} alignItems="center">
            <EmailIcon fontSize="small" />
            <Link href={`mailto:${email}`} underline="hover" color="inherit">
              {email}
            </Link>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <PhoneIcon fontSize="small" />
            <Link href={`tel:${phone}`} underline="hover" color="inherit">
              {phone}
            </Link>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};
