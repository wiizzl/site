type TitleProps = {
    children: React.ReactNode;
    className?: string;
};

const Title = (props: TitleProps) => {
    return (
        <div className="space-y-2.5 pb-3">
            <h2 className={props.className}>{props.children}</h2>
            <hr />
        </div>
    );
};

export { Title };
