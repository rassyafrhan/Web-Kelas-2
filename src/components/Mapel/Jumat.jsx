const Jumat = () => {
	return (
		<>
			<div
				className="border-t-2 border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3"
				data-aos="fade-up"
				data-aos-duration="600">
				<div className="w-[50%] text-base  font-medium">B.INGGIS</div>
				<div className="flex justify-center items-center text-sm">13.00-15.20</div>
			</div>
			<div
				className=" flex justify-between py-[0.50rem] w-72 px-3 opacity-60"
				data-aos="fade-up"
				data-aos-duration="600">
				<div className="w-[50%] text-base  font-medium">Istirahat</div>
				<div className="flex justify-center items-center text-sm">15.20-15.40</div>
			</div>
			<div
				className="border-t-2 border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3"
				data-aos="fade-up"
				data-aos-duration="700">
				<div className="w-[50%] text-base  font-medium">IPAS</div>
				<div className="flex justify-center items-center text-sm">15.40-18.20</div>
			</div>
		</>
	)
}

export default Jumat
