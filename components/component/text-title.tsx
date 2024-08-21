export function TextTitle({ title }: { title: string }) {
    return (
        <h1 style={{ color: 'white' }} className="text-2xl font-bold text-2xl font-semibold leading-none tracking-tight">
            {title}
        </h1>
    )
}