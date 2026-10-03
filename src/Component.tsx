type ComponentProps = {
    className: string
};

export const Component = (props: ComponentProps) => {
    return (
        <p className={props.className}>Component 2</p>
    )
}

