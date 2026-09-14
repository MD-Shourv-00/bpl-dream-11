import type { Dispatch, SetStateAction } from "react";
import type { TypeOfPlayer } from "../../type/type";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { toast } from "react-toastify";

interface TypeOfProps {
    selectedPlayers: TypeOfPlayer[];
    setSelectedPlayers: Dispatch<SetStateAction<TypeOfPlayer[]>>;
    setCoin: Dispatch<SetStateAction<number>>;
    coin: number;
}

const SelectedPlayerCard = ({
    selectedPlayers,
    setSelectedPlayers,
    setCoin,
    coin,
}: TypeOfProps) => {
    function handleRomoveSelectedPlayers(rPlayer: TypeOfPlayer) {
        const restPlayer = selectedPlayers.filter((sPlayer) => {
            return sPlayer.playerName !== rPlayer.playerName;
        });

        setSelectedPlayers(restPlayer);

        const backCoin: number = coin + rPlayer.price;
        setCoin(backCoin);

        toast.warning(`Remove player Successful. Now balance is: ${coin}`);
    }

    if (selectedPlayers.length === 0) {
        return (
            <div>
                <h1 className="text-3xl text-center text-gray-400">
                    No Selected Player available.
                </h1>
            </div>
        );
    } else {
        return (
            <div>
                <h2 className="p-4 pb-2 text-xs opacity-60 tracking-wide">
                    My Selected Players
                </h2>
                <div>
                    {selectedPlayers.map((player) => (
                        <ul
                            key={player.id}
                            className="list bg-base-100 rounded-box shadow-md"
                        >
                            <li className="list-row">
                                <div>
                                    <img
                                        className="size-10 rounded-box"
                                        alt="Tailwind CSS list item"
                                        src={player.playerImg}
                                    />
                                </div>
                                <div>
                                    <div>{player.playerName}</div>
                                    <div className="text-xs uppercase font-semibold opacity-60">
                                        {player.PlayerType}
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleRomoveSelectedPlayers(player)}
                                    className="btn btn-square btn-ghost"
                                >
                                    <RiDeleteBack2Fill />
                                </button>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        );
    }
};

export default SelectedPlayerCard;
