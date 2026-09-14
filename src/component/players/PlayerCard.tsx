import { type Dispatch, type SetStateAction } from "react";
import type { TypeOfPlayer } from "../../type/type";
import { IoManSharp } from "react-icons/io5";
import { toast } from "react-toastify";

interface TypeOfProps {
    player: TypeOfPlayer;
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
    selectedPlayers: TypeOfPlayer[];
    setSelectedPlayers: Dispatch<SetStateAction<TypeOfPlayer[]>>;
}

const PlayerCard = ({
    player,
    coin,
    setCoin,
    selectedPlayers,
    setSelectedPlayers,
}: TypeOfProps) => {

    const {
        playerImg,
        playerName,
        PlayerType,
        battingStyle,
        bowlingStyle,
        price,
        alt,
        id
    } = player;

    // const [isSelected, setIsSelected] = useState<boolean>(false);
    const isSelected = selectedPlayers.some(p => p.id === id)

    function handleBuyNowBtn() {

        const availableCoin: number = coin - price;

        if (availableCoin >= 0) {
            setCoin(availableCoin);
            toast.success(`successfully bought: ${playerName} `);
            setSelectedPlayers([...selectedPlayers, player]);
            // setIsSelected(hasIdInSelectedPlayers);




        } else {
            // setIsSelected(hasIdInSelectedPlayers)
            toast.error(`You do not have enough coin to buy! Your coin is ${coin}`);
        }

    }



    return (
        <div className="rounded-[10px] bg-base-100 w-105 shadow-sm border-solid border-2 border-gray-200 hover:border-green-500 hover:border-2">
            <figure>
                <img
                    src={playerImg}
                    alt={alt}
                    className="w-full object-cover h-96 object-top rounded-t-[10px]"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    <IoManSharp />
                    {playerName}
                </h2>
                <div className="flex justify-start">
                    <p>{player.origin}</p>
                    <p className="text-right">{PlayerType}</p>
                </div>

                <hr className="my-2" />

                <div className="grid grid-cols-2 gap-4 text-[14px] justify-center items-center ">
                    <p>{battingStyle}</p>
                    <p className="text-right">{bowlingStyle}</p>
                    <p>{price} TK</p>
                    <button
                        onClick={() => handleBuyNowBtn()}
                        className="btn btn-primary"
                        disabled={isSelected}
                    >
                        {isSelected ? "Selected" : "Buy Now"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;
