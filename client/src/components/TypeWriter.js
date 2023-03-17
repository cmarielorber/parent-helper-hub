import React, { useState, useEffect, useRef } from "react";

export const SchoolsType = ({ text }) => {
  const index = useRef(0);
  const [currentText, setCurrentText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    index.current = 0;
    setCurrentText("");
    setShowCursor(true); // show cursor when text changes
    setShowText(true); // show text when text changes
  }, [text]);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setCurrentText((value) => value + text.charAt(index.current));
      index.current += 1;
    }, 200);

    // toggle cursor every time currentText changes
    setShowCursor((value) => !value);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [currentText, text]);

  useEffect(() => {
    if (currentText === text) {
      // stop blinking the text once it's fully rendered
      setShowText(true);
    }
  }, [currentText, text]);

  return (
    <h2>
      {showText && currentText}
      {currentText.length < text.length && showCursor && "|"}{" "}
      {/* display cursor only when currentText is not fully rendered */}
    </h2>
  );
};

export const HouseType = ({ text }) => {
  const index = useRef(0);
  const [currentText, setCurrentText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    index.current = 0;
    setCurrentText("");
    setShowCursor(true); // show cursor when text changes
    setShowText(true); // show text when text changes
  }, [text]);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setCurrentText((value) => value + text.charAt(index.current));
      index.current += 1;
    }, 200);

    // toggle cursor every time currentText changes
    setShowCursor((value) => !value);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [currentText, text]);

  useEffect(() => {
    if (currentText === text) {
      // stop blinking the text once it's fully rendered
      setShowText(true);
    }
  }, [currentText, text]);

  return (
    <h2>
      {showText && currentText}
      {currentText.length < text.length && showCursor && "|"}{" "}
      {/* display cursor only when currentText is not fully rendered */}
    </h2>
  );
};

export const LegalType = ({ text }) => {
  const index = useRef(0);
  const [currentText, setCurrentText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    index.current = 0;
    setCurrentText("");
    setShowCursor(true); // show cursor when text changes
    setShowText(true); // show text when text changes
  }, [text]);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setCurrentText((value) => value + text.charAt(index.current));
      index.current += 1;
    }, 200);

    // toggle cursor every time currentText changes
    setShowCursor((value) => !value);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [currentText, text]);

  useEffect(() => {
    if (currentText === text) {
      // stop blinking the text once it's fully rendered
      setShowText(true);
    }
  }, [currentText, text]);

  return (
    <h2>
      {showText && currentText}
      {currentText.length < text.length && showCursor && "|"}{" "}
      {/* display cursor only when currentText is not fully rendered */}
    </h2>
  );
};

export const HealthType = ({ text }) => {
  const index = useRef(0);
  const [currentText, setCurrentText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    index.current = 0;
    setCurrentText("");
    setShowCursor(true); // show cursor when text changes
    setShowText(true); // show text when text changes
  }, [text]);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setCurrentText((value) => value + text.charAt(index.current));
      index.current += 1;
    }, 200);

    // toggle cursor every time currentText changes
    setShowCursor((value) => !value);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [currentText, text]);

  useEffect(() => {
    if (currentText === text) {
      // stop blinking the text once it's fully rendered
      setShowText(true);
    }
  }, [currentText, text]);

  return (
    <h2>
      {showText && currentText}
      {currentText.length < text.length && showCursor && "|"}{" "}
      {/* display cursor only when currentText is not fully rendered */}
    </h2>
  );
};

export const Welcomeheader = ({ text }) => {
  const index = useRef(0);
  const [currentText, setCurrentText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    index.current = 0;
    setCurrentText("");
    setShowCursor(true); // show cursor when text changes
    setShowText(true); // show text when text changes
  }, [text]);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setCurrentText((value) => value + text.charAt(index.current));
      index.current += 1;
    }, 200);

    // toggle cursor every time currentText changes
    setShowCursor((value) => !value);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [currentText, text]);

  useEffect(() => {
    if (currentText === text) {
      // stop blinking the text once it's fully rendered
      setShowText(true);
    }
  }, [currentText, text]);

  return (
    <h2>
      {showText && currentText}
      {currentText.length < text.length && showCursor && "|"}{" "}
      {/* display cursor only when currentText is not fully rendered */}
    </h2>
  );
};


// Contact Us
export const ContactUstype = ({ text }) => {
  const index = useRef(0);
  const [currentText, setCurrentText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    index.current = 0;
    setCurrentText("");
    setShowCursor(true); // show cursor when text changes
    setShowText(true); // show text when text changes
  }, [text]);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setCurrentText((value) => value + text.charAt(index.current));
      index.current += 1;
    }, 200);

    // toggle cursor every time currentText changes
    setShowCursor((value) => !value);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [currentText, text]);

  useEffect(() => {
    if (currentText === text) {
      // stop blinking the text once it's fully rendered
      setShowText(true);
    }
  }, [currentText, text]);

  return (
    <h2>
      {showText && currentText}
      {currentText.length < text.length && showCursor && "|"}{" "}
      {/* display cursor only when currentText is not fully rendered */}
    </h2>
  );
};
