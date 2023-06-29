import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";
import "./directory.scss";
//same as category.props ie the property passed to category on the app.js script
const DirectoryItem = ({ category }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const animateRef = useRef(null);

  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-20px" }
    );
    console.log(isIntersecting);
    observer.observe(animateRef.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  // useEffect(() => {
  //   if (isIntersecting) {
  //     animateRef.current.classList.add("slide-in");
  //   } else {
  //     animateRef.current.classList.remove("slide-in");
  //   }
  // }, [isIntersecting]);

  return (
    <DirectoryItemContainer
      onClick={onNavigateHandler}
      ref={animateRef}
      className={isIntersecting ? "animate" : ""}
    >
      <BackgroundImage
        imageUrl={imageUrl}
        className={isIntersecting ? "slide-in" : ""}
      />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
