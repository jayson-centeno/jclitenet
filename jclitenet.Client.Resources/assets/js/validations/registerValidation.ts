export default function validateRegister(data, props) {

    let errors: any = {};

    if (!data.email)
        errors.email = 'Required';

    if (!data.username)
        errors.username = 'Required';

    if (!data.password)
        errors.password = 'Required';

    if (data.confirmPassword &&
            data.password &&
                data.confirmPassword != data.password) {
                    errors.confirmPassword = 'Password must be the same';
    }

    return errors;
}