import React, { Fragment, useEffect, useState } from 'react';
import { ABox, AboxBody, AboxFooter, AboxHeader } from '../../components/Boxes';
import { AButomAdd, AButomReload, AButtonExcuir } from '../../components/Buttons';
import SubBar from '../../components/SubBar';
import { IoCheckmarkCircleSharp, IoCloseCircleSharp, IoTimeOutline } from 'react-icons/io5';
import { ATable, ATd, ATh, ATr } from '../../components/Tables';

import moment from 'moment';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";
import ptBR from "date-fns/locale/pt-BR";
import Layouts from '../../Layouts';
import { Link } from '@inertiajs/inertia-react';
registerLocale("ptBR", ptBR);

const Ciclos = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [newSearch, setNewSearch] = useState(false);

    const deleteRow = ((i, e) => {
        e.preventDefault();
        confirm(i);
    });

    const alterAction = ((i, e) => {
        e.preventDefault();
        confirm(i);
    });

    return (
        <Fragment>
            <Layouts>
                <SubBar
                    titleBlock={[{
                        'title': "Ciclos",
                        'icon': <IoTimeOutline />
                    }]}
                    breadcumb={[
                        { 'value': 'Ciclos', 'url': false, 'separator': '' }
                    ]}
                />
                <ABox>
                    <AboxHeader>
                        <div className='w-full flex justify-start'>
                            {newSearch
                                ? <AButomReload reload="" />
                                : <AButomAdd url='ciclos.create' />
                            }

                        </div>
                        <div className='w-full flex justify-end'>
                            {/* Formulário de busca */}
                            <div class="p-0">
                                <label for="form-search" class="sr-only">Search</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 z-20">
                                        <Link
                                            type="button"
                                            as="button"
                                        >
                                            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </Link>

                                    </div>
                                    <DatePicker
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2 z-10"
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        id="data_inicial"
                                        name="data_inicial"
                                        dateFormat="dd/MM/yyyy"
                                        locale='ptBR'
                                    />
                                </div>
                            </div>
                            {/* Formulário de busca */}
                        </div>
                    </AboxHeader>
                    <AboxBody>

                        <ATable>
                            <ATr>
                                <ATh>#ID</ATh>
                                <ATh>Data de Início</ATh>
                                <ATh>Semana de Início</ATh>
                                <ATh>Semana Atual</ATh>
                                <ATh>Semanas Percorridas</ATh>
                                <ATh>Ativo</ATh>
                                <ATh className={'w-20'}></ATh>
                            </ATr>

                            <ATr colorRow={2 % 2}>
                                <ATd>5</ATd>
                                <ATd>{moment('2022-08-12').format('DD/MM/YYYY')}</ATd>
                                <ATd>{2}</ATd>
                                <ATd>23</ATd>
                                <ATd>2</ATd>
                                <ATd>
                                    {1 > 0
                                        ? <IoCheckmarkCircleSharp size={25} color="green" onClick={(e) => alterAction(0, e) } className="cursor-pointer" />
                                        : <IoCloseCircleSharp size={25} color="red" onClick={(e) => alterAction(1, e) } className="cursor-pointer" />
                                    }
                                </ATd>
                                <ATd>
                                    <AButtonExcuir onclick={(e) => deleteRow(1, e)} />
                                </ATd>
                            </ATr>

                        </ATable>

                    </AboxBody>

                    <AboxFooter>

                        Paginação

                    </AboxFooter>
                </ABox>
            </Layouts>
        </Fragment>
    )
}

export default Ciclos;