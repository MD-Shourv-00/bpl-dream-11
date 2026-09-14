import type { Dispatch, SetStateAction } from "react";
import type { TypeOfPlayer } from "../../type/type";
import SelectedPlayerCard from "./SelectedPlayerCard";

interface TypeOfProps {
    selectedPlayers: TypeOfPlayer[];
    setSelectedPlayers: Dispatch<SetStateAction<TypeOfPlayer[]>>;
    setCoin: Dispatch<SetStateAction<number>>;
    coin: number;
}

const SelectedPlayers = ({
    selectedPlayers,
    setSelectedPlayers,
    coin,
    setCoin,
}: TypeOfProps) => {
    // console.log(selectedPlayers.length)

    return (
        <SelectedPlayerCard
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            coin={coin}
            setCoin={setCoin}
        />
    );
};

export default SelectedPlayers;
