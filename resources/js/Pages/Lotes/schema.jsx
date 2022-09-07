import * as Yup from 'yup';

export default Yup.object().shape({
    data_inicial: Yup.date().typeError("Digite uma data válida!").required("A data inicial é um campo obrigatório!"),
    semn_inicial: Yup.number().integer("Digite somente inteiros!").typeError("Digite somente números!").required("A semana inicial é um campo obrigatória!"),
});