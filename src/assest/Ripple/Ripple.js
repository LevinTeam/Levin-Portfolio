import React, { useEffect } from 'react';
import './Ripple.css'; // اگر می‌خواهید استایل‌ها را از یک فایل CSS جداگانه بارگذاری کنید

const RippleEffect = () => {

  useEffect(() => {
    const drawRipple = (ev) => {
      const x = ev.clientX;
      const y = ev.clientY;
      const node = document.querySelector(".ripple");
      const newNode = node.cloneNode(true);
      newNode.classList.add("animate");
      newNode.style.left = `${x - 5}px`;
      newNode.style.top = `${y - 5}px`;
      node.parentNode.replaceChild(newNode, node);
    };

    window.addEventListener("click", drawRipple);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("click", drawRipple);
    };
  }, []);

  return (
    <div>
      <div className="ripple"></div>
    </div>
  );
};

export default RippleEffect;
