import React, {useEffect, useState} from "react";
import {Button, Container, Navbar, Offcanvas} from "react-bootstrap";
import Switch from "react-switch";

enum Theme {
  Light = "light",
  Dark  = "dark"
}

export default function Header() {
  const [theme, setTheme] = useState(Theme.Dark);
  const [switchBgColor, setSwitchBgColor] = useState("#fff");
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const storedThemeString = localStorage.getItem("theme");
    if (storedThemeString) {
      applyTheme(storedThemeString as Theme);
    } else {
      const preferDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      applyTheme(getTheme(preferDark));
    }
  }, []);

  function applyTheme(theme: Theme) {
    setTheme(theme);
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
    const bgColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--bs-primary-bg-subtle");
    setSwitchBgColor(bgColor);
  }

  return (
    <Navbar className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand className="m-0">Remnant Armor Search</Navbar.Brand>
        <Button variant="warning" size="sm" onClick={() => setShowAbout(true)}>About</Button>
        <Offcanvas className="h-100" show={showAbout} onHide={() => setShowAbout(false)}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>About This Site</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            This site allows you to perform a weighted search for various combinations of
            limitations and armor stats. Just select which sets to include in the filter tab
            (default is all) and fill in any minimums/maximums/weights and search away.
            The <strong>weight</strong> field for properties represents the amount of score gained
            per point of that attribute. So a weight of 1 on the armor field and 2 in the bleed
            field means a given combination's score will be equal to its armor value plus twice its
            bleed resistance. Any missing mins/maxes are ignored, and empty weights are treated as
            0s.
            <br/><br/>
            This app is open source and you can go take a look at <a
            href="https://github.com/PsychicMuffin/remnant-armor-search">github</a>. I'm not super
            experienced at front-end development so feel free to ask questions or add suggestions to
            the github issue tracker, and I'll respond as soon as I can!
          </Offcanvas.Body>
        </Offcanvas>
        <Switch
          checked={theme === Theme.Dark}
          onChange={(checked) => applyTheme(getTheme(checked))}
          onColor={switchBgColor}
          offColor={switchBgColor}
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
              fontSize: 20,
            }}>🔆</div>}
        />
      </Container>
    </Navbar>
  );
}

function getTheme(isDark: boolean) {
  return isDark ? Theme.Dark : Theme.Light;
}
