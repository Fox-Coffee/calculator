import './NumberBox.scss';

function NumberBox(props: any) {
    return (
        <div className="NumberBox">
            <div className='previous'>{props.prev}{props.operation}</div>
            {props.num}
        </div>
    );
}

export default NumberBox;