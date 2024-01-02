"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./image-picker.module.css";


export default function ImagePicker({ label, name }) {
    const [image, setImage] = useState();
    const imageImput = useRef();

    const handleImagePick = () => {
        imageImput.current.click();
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (!file) {
            setImage(null);

            return;
        };

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setImage(fileReader.result);
        };

        fileReader.readAsDataURL(file);
    };

    return (
        <div className={styles.picker}>
            <label htmlFor={name}>
                {label}
            </label>

            <div className={styles.controls}>
                <div className={styles.preview}>
                    {!image && <p>No image selected.</p>}
                    {image &&
                        <Image
                            src={image}
                            alt="Selected Image"
                            fill
                        />
                    }
                </div>

                <input
                    type="file"
                    id={name}
                    name={name}
                    className={styles.input}
                    ref={imageImput}
                    onChange={handleImageChange}
                    accept="image/png, image/jpeg, image/jpg"
                    required
                />

                <button
                    type="button"
                    className={styles.button}
                    onClick={handleImagePick}
                >
                    Pick an Image
                </button>
            </div>

        </div>
    );
};