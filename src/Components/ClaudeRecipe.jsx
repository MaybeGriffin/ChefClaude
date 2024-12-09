import ReactMarkdowm from "react-markdown"

export default function ClaudeRecipe(props) {
    return (
        <section>
            <ReactMarkdowm>{props.recipe}</ReactMarkdowm>
        </section>
    )
}