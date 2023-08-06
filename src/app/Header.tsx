import {Container, Navbar} from "react-bootstrap";
import {useEffect, useState} from "react";
import Switch from "react-switch";

enum Theme {
  Light = "light",
  Dark = "dark"
}

function getTheme(isDark: boolean) {
  return isDark ? Theme.Dark : Theme.Light;
}

export default function Header() {
  const [theme, setTheme] = useState(Theme.Dark);
  const [bgColor, setBgColor] = useState("#fff");

  useEffect(() => {
    const storedThemeString = localStorage.getItem('theme')
    if (storedThemeString) {
      applyTheme(storedThemeString as Theme);
    } else {
      const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      applyTheme(getTheme(preferDark));
    }
  }, [])

  function applyTheme(theme: Theme) {
    setTheme(theme);
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
    const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--bs-primary-bg-subtle');
    setBgColor(bgColor);
  }

  function onChange(checked: boolean) {
    applyTheme(getTheme(checked));
  }

  return (
    <Navbar className="bg-body-tertiary">
      <Container fluid className="mx-3">
        <Navbar.Brand>Remnant Armor Search</Navbar.Brand>
        <Switch
          checked={theme === Theme.Dark}
          onChange={onChange}
          onColor={bgColor}
          offColor={bgColor}
          checkedIcon={
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              height: "100%",
              fontSize: 20,
            }}>🌙</div>}
          uncheckedIcon={
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              height: "100%",
              fontSize: 20
            }}>🔆</div>}
        />
      </Container>
    </Navbar>
  )
}
