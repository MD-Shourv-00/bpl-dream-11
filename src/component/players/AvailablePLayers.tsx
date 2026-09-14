import type { TypeOfPlayer } from "../../type/type";
import { type Dispatch, type SetStateAction } from "react";
import PlayerCard from "./PlayerCard";

interface PlayerProps {
    playersData: TypeOfPlayer[];
    setCoin: Dispatch<SetStateAction<number>>;
    coin: number;
    selectedPlayers: TypeOfPlayer[];
    setSelectedPlayers: Dispatch<SetStateAction<TypeOfPlayer[]>>;
}
const AvailablePLayers = ({
    playersData,
    coin,
    setCoin,
    selectedPlayers,
    setSelectedPlayers,
}: PlayerProps) => {
    // console.log(playersData, 'success to get');
    return (
        <div className="grid grid-cols-3 gap-7">
            {playersData.map((player: TypeOfPlayer) => (
                <PlayerCard
                    key={player.id}
                    player={player}
                    coin={coin}
                    setCoin={setCoin}
                    selectedPlayers={selectedPlayers}
                    setSelectedPlayers={setSelectedPlayers}
                />
            ))}
        </div>
    );
};

export default AvailablePLayers;
