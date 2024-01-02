import { Suspense } from "react";
import Link from "next/link";
import styles from "./pages.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";


export const metadata = {
	title: 'All Meals',
	description: 'Browse the delicious meals shared by our vibrant community.',
};

async function MealsLoader() {
    const meals = await getMeals();

    return <MealsGrid meals={meals} />
};

export default function Meals() {

    return (
        <>
            <header className={styles.header}>
                <h1>
                    Delicious meals, created{" "}
                    <span className={styles.highlight}>
                        by you
                    </span>
                </h1>

                <p>
                    Choose your favorite recipe and cook it yourself.  It is easy and fun.
                </p>

                <p className={styles.cta}>
                    <Link href="/meals/share">
                        Share Your Favorite Recipe
                    </Link>
                </p>
            </header>

            <main className={styles.main}>
                <Suspense fallback={
                    <p className={styles.loading}>
                        Fetching Meals...
                    </p>
                }>
                    <MealsLoader />
                </Suspense>
            </main>
        </>
    );
};
