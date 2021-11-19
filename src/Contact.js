import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import SendIcon from "@material-ui/icons/Send";
import { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";

const useStyles = makeStyles((theme) => ({
  "@global": {
    "@keyframes rotate": {
      "0%": {
        transform: "rotateZ(0deg)",
      },
      "100%": {
        transform: "rotateZ(360deg)",
      },
    },
    "@keyframes jump": {
      "0%": { transform: "translate(0%, 0%) scale(1.25, 0.75)" },
      "50%": { transform: "translate(0%, -100%) scale(1, 1)" },
      "55%": { transform: "translate(0%, -100%) rotate(15deg)" },
      "60%": { transform: "translate(0%, -100%) rotate(-15deg)" },
      " 65%": { transform: "translate(0%, -100%) rotate(15deg)" },
      "70%": { transform: "translate(0%, -100%) rotate(-15deg)" },
      "100%": { transform: "translate(0%, 0%) scale(1.25, 0.75)" },
    },
    "@keyframes translate": {
      "0%": {
        transform: "translateX(0) scale(1)",
      },
      "50%": {
        transform: "translateX(500px) translateY(50px) scale(3) ",
      },
      "100%": {
        transform:
          "translateX(1000px) scale(5) translateY(-100px) rotateZ(180deg)",
      },
    },
  },

  container: {
    color: "#fff",
    position: "absolute",
    width: "100vw",
    paddingLeft: "10px",
    height: "100vh",
    paddingTop: 60,
  },

  sendIcon: {
    animation: (props) =>
      props.sentStatus === "idle"
        ? "jump 1s infinite reverse"
        : props.sentStatus === "loading"
        ? "rotate 1s"
        : props.sentStatus === "succeeded"
        ? "translate 2s"
        : "",
  },
  multilineColor: {
    color: "#fff",
  },
}));
const Contact = () => {
  const timerRef = useRef(null);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const form = useRef();
  const [sentStatus, setSentStatus] = useState("idle");
  const classes = useStyles({ sentStatus });
  const handleChange = (event) => {
    setContact((prevContact) => ({
      ...prevContact,
      [event.target.id]: event.target.value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSentStatus("loading");
    timerRef.current = setTimeout(() => {
      emailjs
        .sendForm(
          "service_s7lzv3d",
          "template_pkwbsk7",
          form.current,
          "user_KWK4CSGUMDxoP22Apffh9"
        )
        .then(
          (result) => {
            setSentStatus("succeeded");
          },
          (error) => {
            setSentStatus("failed");
          }
        );
    }, 2000);
  };
  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);
  return (
    <Grid container className={classes.container} direction="column">
      <Grid item md={2}>
        <Typography variant="h3">Contact</Typography>
      </Grid>
      <form ref={form} onSubmit={sendEmail}>
        <Grid
          item
          container
          direction="row"
          spacing={4}
          justifyContent="center"
        >
          <Grid item>
            <TextField
              id="name"
              label="Name"
              name="from_name"
              value={contact.name}
              onChange={handleChange}
              autoComplete={"off"}
            />
          </Grid>
          <Grid item>
            <TextField
              id="email"
              name="email"
              label="Email"
              value={contact.email}
              onChange={handleChange}
              autoComplete={"off"}
              type="email"
            />
          </Grid>
        </Grid>
        <Grid item container alignItems="center" direction="column" spacing={2}>
          <Grid item>
            <TextField
              id="subject"
              label="Subject"
              name="subject"
              value={contact.subject}
              onChange={handleChange}
              multiline
              style={{ width: 300 }}
              autoComplete={"off"}
            />
          </Grid>
          <Grid item>
            <TextField
              id="message"
              label="Message"
              name="message"
              value={contact.message}
              onChange={handleChange}
              multiline
              minRows={8}
              style={{ width: 300 }}
              autoComplete={"off"}
            />
          </Grid>
          <Grid item style={{ paddingTop: 50, width: 200 }}>
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              endIcon={<SendIcon className={classes.sendIcon} />}
              type="submit"
            >
              send
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default Contact;
