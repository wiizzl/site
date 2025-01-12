type TitleProps = {
    title: string;
};

const Title = (props: TitleProps) => {
    return (
        <div className="mb-3 space-y-2.5">
            <h2 className="text-lg">{props.title}</h2>
            <hr />
        </div>
    );
};

export { Title };
