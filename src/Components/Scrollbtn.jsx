import{ useState, useEffect } from "react";

const Scrollbtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "180px",
        right: "30px",
        padding: "10px 20px",
        fontSize: "16px",
        borderRadius: "50%",
        backgroundColor: "rgb(0, 252, 42)",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        display: isVisible ? "block" : "none",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
      }}
    >
      ↑
    </button>
  );
};

export default Scrollbtn;
