import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { TypeOfPlayer } from "../../type/type";
import AvailablePLayers from "./AvailablePLayers";
import SelectedPlayers from "./SelectedPlayers";

interface PlayerProps {
    playerPromise: Promise<TypeOfPlayer[]>;
    setCoin: Dispatch<SetStateAction<number>>;
    coin: number;
}

const Players = ({ playerPromise, setCoin, coin }: PlayerProps) => {
    const playersData: TypeOfPlayer[] = use(playerPromise);
    // console.log(playersData)

    const [btnStatus, setBtnStatus] = useState<string>("available");

    const [selectedPlayers, setSelectedPlayers] = useState<TypeOfPlayer[]>([]);

   

    return (
        <div className=" w-full max-w-7xl mx-auto">
            <div className="flex justify-between gap-1 mb-10">
                <h2 className="font-bold text-xl">{` ${btnStatus === "available" ? "Available Players" : btnStatus === "selected" ? `Selected Players (${selectedPlayers.length})` : ""}`}</h2>

                <div className="flex gap-2">
                    <button
                        onClick={() => setBtnStatus("available")}
                        className={`btn ${btnStatus === "available" ? "btn-success" : ""}`}
                    >
                        Available
                    </button>

                    <button
                        onClick={() => setBtnStatus("selected")}
                        className={`btn ${btnStatus === "selected" ? "btn-success" : ""}`}
                    >
                        Selected
                    </button>
                </div>
            </div>

            {btnStatus === "available" ? (
                <AvailablePLayers
                    setCoin={setCoin}
                    coin={coin}
                    playersData={playersData}
                    selectedPlayers={selectedPlayers}
                    setSelectedPlayers={setSelectedPlayers}
                />
            ) : (
                <SelectedPlayers
                    coin={coin}
                    setCoin={setCoin}
                    selectedPlayers={selectedPlayers}
                    setSelectedPlayers={setSelectedPlayers}
                />
            )}
        </div>
    );
};

export default Players;
