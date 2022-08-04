import Input from '../../UI/Input';
import classses from './MealItemForm.module.css';

const MealItemForm = props => {
    return (
        <form className={classses.form}>
            <Input label="Amount" input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}/>
            <button>+ Add</button>
        </form>
    );
};

export default MealItemForm;