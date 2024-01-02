"use client";

import { useRef } from "react";
import styles from "./image-picker.module.css";


export default function ImagePicker({ label, name }) {
    const imageImput = useRef();

    function handleImagePick() {
        imageImput.current.click();
    };

    return (
        <div className={styles.picker}>
            <label htmlFor={name}>
                {label}
            </label>

            <div className={styles.controls}>
                <input
                    type="file"
                    id={name}
                    name={name}
                    className={styles.input}
                    ref={imageImput}
                    accept="image/png, image/jpeg"
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