import React, { Fragment, useEffect, useState } from 'react';
import { ABox, AboxBody, AboxFooter, AboxHeader } from '../../components/Boxes';
import { AButomAdd, AButomReload, AButtonExcuir } from '../../components/Buttons';
import SubBar from '../../components/SubBar';
import { IoCheckmarkCircleSharp, IoCloseCircleSharp, IoTimeOutline } from 'react-icons/io5';
import api from '../../services/api';
import PageLoading from '../../components/PageLoading';
import { ATable, ATd, ATh, ATr } from '../../components/Tables';
import moment from 'moment';
import ReactPaginate from 'react-paginate';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";
import ptBR from "date-fns/locale/pt-BR";
registerLocale("ptBR", ptBR);

const Lotes = () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoiZW1haWxAZW1haWwuY29tIiwiaWF0IjoxNjYxMjgzMTI0fQ.1jGRCMknZDrbN4YiU0JxMJYoThX-tf03g8po85-aOMU";

    const [ciclos, setCiclos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [newSearch, setNewSearch] = useState(false);
    // Lista todos os ciclos
    useEffect(() => {
        async function getCiclos() {
            setLoading(true);
            await api.get('ciclos')
                .then((ciclos) => {
                    setCiclos(ciclos.data.ciclos);
                    setTimeout(() => {
                        setLoading(false);
                    }, 500)
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        getCiclos();
    }, [])

    // Ativa ou desativa um ciclo
    async function actionActive(id, ativo, dt, sm) {
        await api.patch('ciclos', {
            "cicloId": parseInt(id),
            "ativo": ativo
        }, { headers: { "Authorization": `Bearer ${token}` } })
            .then((response) => {

                const index = ciclos.findIndex(object => {
                    return object.cicloId === parseInt(id);
                });

                if (index < 0) {
                    console.log('Não Têm...');
                }

                let ltemp = newCiclo;
                ltemp[index] = {
                    "cicloId": parseInt(id),
                    "dataInicial": dt,
                    "semanaInicial": sm,
                    "ativo": ativo,
                }
                setCiclos(ltemp);
            });
    }

    // Exclui um ciclo
    async function deleteCiclo(id) {
        await api.delete('ciclos', {
            data: { cicloId: id },
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                const cic = ciclos.filter(item => item.cicloId !== id);
                setCiclos(cic);
            }).catch(err => {
                console.log(err);
            })
    }

    const deleteRow = ((id, e) => {
        e.preventDefault();
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className="w-96 h-52 p-8 shadow text-center bg-gray-100 rounded ">
                        <h1 className="text-xl">Têm certeza?</h1>
                        <p className="my-6">Você deseja excluir este ciclo?</p>
                        <button
                            className="w-36 px-4 py-2 mr-2 bg-gray-700 rounded shadow text-white"
                            onClick={onClose}>Não</button>
                        <button
                            className="w-36 px-4 py-2 ml-2 bg-red-700 rounded shadow text-white"
                            onClick={() => {
                                deleteCiclo(id);
                                onClose();
                            }}
                        >
                            Sim
                        </button>
                    </div>
                );
            }
        })
    });

    const [newCiclo, setNewCiclo] = useState(ciclos.slice(0, 50));
    useEffect(() => {
        setNewCiclo(ciclos.slice(0, 50));
    }, [ciclos])

    const handle = (() => {
        const resultSearch = ciclos.filter((res) => (moment(res.dataInicial).format('YYYY-MM-DD') === moment(startDate).format('YYYY-MM-DD')));
        setNewCiclo(resultSearch);
        setNewSearch(true);
    })

    const reloadCiclos = (() => {
        setLoading(true);
        setNewCiclo(ciclos.slice(0, 50));
        setNewSearch(false);
        setTimeout(() => {
            setLoading(false);
        }, 500)
    })

    const [pageNumber, setPageNumber] = useState(0);
    const itemsPerPage = 10;
    const pagesVisited = pageNumber * itemsPerPage;
    const displayItems = newCiclo
        .slice(pagesVisited, pagesVisited + itemsPerPage)
        .map((item, index) => (
            <ATr key={index} colorRow={index % 2}>
                <ATd>{item.cicloId}</ATd>
                <ATd>{moment(item.dataInicial).format('DD/MM/YYYY')}</ATd>
                <ATd>{item.semanaInicial}</ATd>
                <ATd>23</ATd>
                <ATd>2</ATd>
                <ATd>
                    {item.ativo > 0
                        ? <IoCheckmarkCircleSharp size={25} color="green" onClick={() => actionActive(item.cicloId, 0, item.dataInicial, item.semanaInicial)} className="cursor-pointer" />
                        : <IoCloseCircleSharp size={25} color="red" onClick={() => actionActive(item.cicloId, 1, item.dataInicial, item.semanaInicial)} className="cursor-pointer" />
                    }
                </ATd>
                <ATd>
                    <AButtonExcuir onclick={(e) => deleteRow(item.cicloId, e)} />
                </ATd>
            </ATr>
        ));

    const pageCount = Math.ceil(ciclos.length / itemsPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <Fragment>
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
                            ? <AButomReload reload={reloadCiclos} />
                            : <AButomAdd url="/ciclos/AddCiclo" />
                        }

                    </div>
                    <div className='w-full flex justify-end'>
                        {/* Formulário de busca */}
                        <div class="p-0">
                            <label for="form-search" class="sr-only">Search</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 z-20">
                                    <button
                                        onClick={handle}
                                    >
                                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </button>

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

                    {loading
                        ?
                        <div className="flex items-center justify-center">
                            <PageLoading />
                        </div>
                        :
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

                            {displayItems}

                        </ATable>
                    }

                </AboxBody>
                {!loading && !newSearch &&
                    <AboxFooter>

                        <ReactPaginate
                            previousLabel={"Anterior"}
                            nextLabel={"Próximo"}
                            pageCount={pageCount}
                            onPageChange={changePage}
                            pageLinkClassName="w-8 h-8 flex items-center justify-center"
                            containerClassName="flex py-4 items-center justify-center paginationButtns"
                            previousLinkClassName="flex items-center py-2 px-4 transform rounded-md"
                            nextLinkClassName="flex items-center py-2 px-4 transform rounded-md"
                            disabledClassName="flex items-center text-gray-300 cursor-not-allowed"
                            activeClassName="flex items-center text-gray-50 transform bg-blue-500 rounded-md shadow-sm"
                        />

                    </AboxFooter>
                }
            </ABox>
        </Fragment>
    )
}

export default Lotes;