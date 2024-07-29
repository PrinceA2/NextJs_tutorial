import { useRouter } from "next/router";

const settingsPage = () => {
    const router = useRouter();

    return (
        <div>
            <h1>This is the setting page for {router.query.username}</h1>
        </div>
    )
}

export default settingsPage