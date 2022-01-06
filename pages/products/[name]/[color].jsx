import { useRouter } from "next/router";

const Color = () => {

    const router =useRouter();
    console.log(router.query);

    return (
        <h1>{router.query.name}の{router.query.color}カラーです</h1>
    )
}

export default Color