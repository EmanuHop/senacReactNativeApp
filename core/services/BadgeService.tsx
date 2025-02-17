import { useEffect, useState } from 'react';
import { AxiosError, AxiosResponse } from 'axios';
import { API } from '../../http/API';
import { Badge } from '../../models/Badge';

export function getAllBadges() {
  // const [badges, setBadges] = useState<Badge[]>([]);

  // useEffect(() => {
  //   api.get<Badge[]>('/Badge').then((response) => {
  //     setBadges(response.data);
  //   });
  // }, []);

  // return badges;

  //MOCK
  // const mock: any[] = require('../../components/utils/badges.json');

  // useEffect(() => {
  //   setBadges(mock);
  //   setMasterData(mock);
  //   setFilteredData(mock);
  // }, []);

  const [badges, setBadges] = useState<Badge[]>([]);
  const [search, setSearch] = useState<string>('');
  const [filteredData, setFilteredData] = useState<Badge[]>([]);
  const [masterData, setMasterData] = useState<Badge[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    API.get<Badge[]>('/Badge')
      .then((response: AxiosResponse) => {
        setBadges(response.data);
        setMasterData(response.data);
        setFilteredData(response.data);
      })
      .catch((error: AxiosError<Badge[]>) => {
        switch (error.response?.status) {
          case 404: {
            alert('Erro de endereçamento');
            break;
          }
          case 400: {
            alert('Erro de cliente');
            break;
          }
          case 500: {
            alert('Erro de servidor');
          }
        }
      })
      .finally(() => setIsLoading(true));
  }, []);

  // if (badges === null) {
  //   const mock: Badge[] = require('../../../common/utils/mock/Badges.json');

  //   useEffect(() => {
  //     setBadges(mock);
  //     setMasterData(mock);
  //     setFilteredData(mock);
  //   }, []);
  // }
  return { badges, setBadges, search, setSearch, filteredData, setFilteredData, masterData, setMasterData, isLoading };
}
