import React from "react";

function DefaultView({cardNumber}) {
	return (
		<div className='DefaultView h-full'>
			<div className='card-inner h-full flex flex-col justify-between '>
        <h2 className="text-9xl">Pp #1</h2>
				<div className='band-bottom text-neutral-100 text-sm w-full flex items-end justify-between'>
					<span className='snippet mr-auto w-40'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse,
						totam! Hover me to see a response.
					</span>
					<span className='arrow'>→</span>
				</div>
			</div>
		</div>
	);
}

export default DefaultView;
