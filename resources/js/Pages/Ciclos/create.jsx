import React, { Fragment, useState } from 'react';
import { IoTimeOutline } from 'react-icons/io5';
import { ABox, AboxBody, AboxFooter, AboxHeader } from '../../components/Boxes';
import { AButomBack, AButtonSave } from '../../components/Buttons';
import SubBar from '../../components/SubBar';
import { Formik, Field, Form, ErrorMessage, useFormikContext, useField } from 'formik';
import schema from './schema';

import api from '../../services/api';
import moment from 'moment';
import { AMessageError, AMessageSuccess } from '../../components/Messages';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";
import ja from "date-fns/locale/pt-BR";
import Layouts from '../../Layouts';

registerLocale("ja", ja);



const Create = () => {
  const [loading, setLoading] = useState(false);
  const [postMessageErro, setPostMessageErro] = useState(false);
  const [postMessageSuccess, setPostMessageSuccess] = useState(false);
  const styleInput = [
    "w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:ring"
  ];
  const styleLabel = [
    "w-full mt-2 text-gray-700"
  ];

  const DatePickerField = ({ ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    return (
      <DatePicker
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(val) => {
          setFieldValue(field.name, val);
        }}
        locale='ja'
      />
    );
  };

  const onsubmit = async (values) => {
    setLoading(true);
    await api.get('ciclos')
      .then((ciclos) => {
        const response = ciclos.data.ciclos
          .filter((d) => (moment(d.dataInicial).format('YYYY-MM-DD') === moment(values.data_inicial)
            .format('YYYY-MM-DD') || (d.ativo === true)))
        if (response.length === 0) {
          const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoiZW1haWxAZW1haWwuY29tIiwiaWF0IjoxNjYxMjgzMTI0fQ.1jGRCMknZDrbN4YiU0JxMJYoThX-tf03g8po85-aOMU";
          api.post('ciclos', {
            data_inicial: moment(values.data_inicial).format('YYYY-MM-DD hh:mm:ss'),
            semn_inicial: values.semn_inicial
          }, { headers: { "Authorization": `Bearer ${token}` } })
            .then((response) => {
              setLoading(false);
              setPostMessageSuccess(response.data.message);
              setPostMessageErro(false);
            }).catch((err) => {
              setLoading(false);
              console.log(err);
            })
        } else {
          setLoading(false);
          setPostMessageErro('Existe um ciclo cadastrado para esta data ou algum ciclo ativo!');
          setPostMessageSuccess(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });

  }

  return (
    <Fragment>
      <Layouts>
        <SubBar
          titleBlock={[{
            'title': "Ciclos",
            'icon': <IoTimeOutline />
          }]}
          breadcumb={[
            { 'value': 'Ciclos', 'url': 'ciclos.index', 'separator': '/' },
            { 'value': 'Adicionar Ciclo', 'url': false, 'separator': '' }
          ]}
        />
        <ABox>
          <AboxHeader>
            <div className='w-full flex justify-start'>
              <AButomBack url={'ciclos.index'} />
            </div>
            <div className='w-full flex justify-end'>

            </div>
          </AboxHeader>

          <Formik
            validationSchema={schema}
            onSubmit={onsubmit}
            initialValues={{
              data_inicial: new Date(),
              semn_inicial: '',
              ativo: 1
            }}
          >
            {() => (
              <Form>
                <AboxBody>
                  {postMessageErro &&
                    <div>{<AMessageError message={postMessageErro} />}</div>
                  }
                  {postMessageSuccess &&
                    <div>{<AMessageSuccess message={postMessageSuccess} />}</div>
                  }

                  <div className="">
                    <label className={styleLabel} htmlFor="data_inicial">Data do Início do ciclo de produção</label>
                    <DatePickerField
                      className={styleInput}
                      id="data_inicial"
                      name="data_inicial"
                      dateFormat="dd/MM/yyyy"
                      onFocus={e => e.target.blur()}
                    />
                  </div>
                  <div className="mt-4">
                    <label className={styleLabel} htmlFor="semn_inicial">Semana Inicial</label>
                    <Field
                      className={styleInput}
                      id="semn_inicial"
                      name="semn_inicial"
                      type="text"
                    />
                    <ErrorMessage name="semn_inicial" className="text-red-500 bg-slate-600" />
                  </div>
                </AboxBody>
                <AboxFooter>
                  <div className="w=full flex items-center justify-end">
                    <AButtonSave loading={loading} />
                  </div>
                </AboxFooter>
              </Form>
            )}
          </Formik>
        </ABox>
      </Layouts>
    </Fragment>
  )
}

export default Create;