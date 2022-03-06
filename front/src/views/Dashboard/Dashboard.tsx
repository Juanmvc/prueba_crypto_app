import { ButtonSolid, Grid, Box, Text, Icon, CryptoCard } from 'design-system';
import React, { useEffect, useState } from 'react';
import { getCryptoData } from "../../Repositories/CryptoRepository"

export const Dashboard = () => {

  interface CryptoData {
    id: string,
    name: string;
    sku: string;
    stock: number;
    variant: number;
  }

  const [data, setData] = useState<CryptoData[]>([])
  const [busy, setBusy] = useState(true)

  useEffect(() => {
      loadCryptoData()
    }, []);
  
    const loadCryptoData = async ()  => {
      setBusy(true);
      try {
        const data = await getCryptoData();
        const json = await data.json();
        setData(json)
        
      } catch (e) {
        console.log("Ha ocurrido un error")
      }
      setBusy(false)
    }

      

    return (<>
        <Box bg="white" pt="28px" pl="16px" pr="16px" borderTopLeftRadius="30px" borderTopRightRadius="30px">
            <Box pl="16px" pr="16px" mb="65px">
                <Box display="flex" justifyContent="left">
                    <p>Recent</p>
                </Box>
                <Grid gridTemplateColumns={["1fr", "1fr 1fr"]} gridRowGap="24px" gridColumnGap="18px">
                  {!busy && data.map(crypto => {
                    return <CryptoCard
                              name={crypto.name}
                              abreviation={crypto.sku}
                              value={crypto.stock.toString()}
                              variant={crypto.variant.toString()}
                              />
                  })
                  }
                </Grid>
            </Box>
            <Box pb="32px" height="64px">
                <ButtonSolid
                    onClick={() => loadCryptoData()}
                >
                    Show all transactions
                </ButtonSolid>
            </Box>
        </Box>
      </>
    );
  };