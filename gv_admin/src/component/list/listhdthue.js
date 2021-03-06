import React, {Component} from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {
  Link,
  withRouter
} from "react-router-dom";
import ReactPaginate from "react-paginate";

class listhdthue extends Component{

	constructor(props){
		super(props);
		this.state = {
			hdthues:[],
			// DVs:[],
			// phieuthus:[],
			// ngvs:[],
			// yeucaus:[],
			serach:'',
			currentPage: 1,
			pageSize: 8,
			totalColumns: 0,
			search: '',
			sortDV: 0,
			sortNgaylam: 0,
			sortNgayketthuc: 0,
			sortThanhtoan:0,
			isLoading: true,
		};
		this.remove = this.remove.bind(this);
		this.currencyFormat = this.currencyFormat.bind(this);	
		this.paging = this.paging.bind(this);
		this.searchChange = this.searchChange.bind(this);
        this.searchSubmit = this.searchSubmit.bind(this);
        this.sortByDVAsc = this.sortByDVAsc.bind(this);
        this.sortByDVDesc = this.sortByDVDesc.bind(this);
        this.sortByNgaylamAsc = this.sortByNgaylamAsc.bind(this);
        this.sortByNgaylamDesc = this.sortByNgaylamDesc.bind(this);
        this.sortByNgayketthucAsc = this.sortByNgayketthucAsc.bind(this);
        this.sortByNgayketthucDesc = this.sortByNgayketthucDesc.bind(this);
        this.sortByThanhtoanAsc = this.sortByThanhtoanAsc.bind(this);
        this.sortByThanhtoanDesc = this.sortByThanhtoanDesc.bind(this);
	}

	async componentDidMount(){
		this.setState({isLoading: true});

		const hdthue = await (await fetch(`/gvnhanh/hdthue/all`)).json();
		// const DV = await (await fetch('/gvnhanh/bangphidv')).json();
		// const phieuthu = await (await fetch('/gvnhanh/phieuthudv')).json();
		// const ngv = await (await fetch('/gvnhanh/nguoigv')).json();
		// const yeucau = await (await fetch('/gvnhanh/yeucau')).json();
		this.setState({
				hdthues: hdthue,
				// DVs: DV,
				// phieuthus: phieuthu,
				// ngvs: ngv,
				// yeucaus: yeucau,
				search: '',
				isLoading: false,
		})
		this.paging(hdthue);
	}

	paging(list){
		const pageSize = this.state.pageSize;
		const temp = list.slice(0, pageSize);
		this.setState({
			hdthues: temp,
			totalColumns: Math.ceil(list.length / pageSize),
		})
	}

	async handlePaging({ selected }){

		// (current - 1 ) = selected| * size l???y : size row
		const { pageSize } = this.state;
		const list = await (await fetch(`/gvnhanh/hdthue/all`)).json();

		//myFish.splice(2, 1); // x??a 1 ph???n t??? t??? v??? tr?? 2
		const start = selected * pageSize;
		// size = 6, v??? tr?? 1 b???t ?????u t??? 0 ?????n 5
		// size = 6, v??? tr?? 2 b???t ?????u t??? 6 ?????n 11
		const end = start + pageSize;

		const newList = list.slice(start, end)

		this.setState({
			hdthues: newList,
			currentPage: selected + 1,
		})
	}

	async remove(id){
		await fetch(`/gvnhanh/hdthue/${id}`,{
			method: 'DELETE',
			headers:{
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		}).then(() =>{
			let updateHdThue = [...this.state.hdthues].filter(i => i.idhdthue !== id);
			this.setState({hdthues: updateHdThue});
		});
	}

	handleClick(id){
      confirmAlert({
          title: 'C???nh b??o',
          message: 'B???n ch???c ch???n mu???n x??a',
          buttons: [
            {
              label: '?????ng ??',
              onClick: ()=> this.remove(id)
            },
            {
              label: 'Kh??ng',
           
            },
          ],
           childrenElement: () => null,
            closeOnClickOutside: true,
            closeOnEscape: true,
            willUnmount: () => null,
            onClickOutside: () => null,
            onKeypressEscape: () => null
        });
    }

    currencyFormat(num){
		   return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') +' VN??'
		}

	formatter = new Intl.DateTimeFormat("en-GB", {
	      year: "numeric",
	      month: "2-digit",
	      day: "2-digit"
	    });

	async searchChange(event){
		const target = event.target;
		const value = target.value;
		const name= target.name;
		let item = {...this.state.search};
		item = value;
		if(item===''){
			this.componentDidMount()
		}
		this.setState({
			search: item
		});
		
	}
	async searchSubmit(event){
		event.preventDefault();
		const pageSize = this.state["pageSize"];
		const search = this.state.search;
		const find = await(await fetch(`gvnhanh/hdthue/find/${search}`)).json();
		this.setState({
			hdthues: find,
			totalColumns: Math.ceil(find.length / pageSize)
		})
		
	}

	sortByDVAsc() {
    	let hdthue = this.state.hdthues.sort((a,b) => (a.tendv.localeCompare(b.tendv)));
    	this.setState({
    		hdthues: hdthue,
    		sortDV: 0,
    	})
    	console.log("sort", this.state);
    }

    sortByDVDesc() {
        let hdthue = this.state.hdthues.sort((a, b) => (b.tendv.localeCompare(a.tendv)));
    	this.setState({
    		hdthues: hdthue,
    		sortDV: 1,
    	})
    }

    sortByNgaylamAsc() {
    	let hdthue = this.state.hdthues.sort((a,b) => (a.ngaybatdau.localeCompare(b.ngaybatdau)));
    	this.setState({
    		hdthues: hdthue,
    		sortNgaylam: 0,
    	})
    	console.log("sort", this.state);
    }

    sortByNgaylamDesc() {
        let hdthue = this.state.hdthues.sort((a, b) => (b.ngaybatdau.localeCompare(a.ngaybatdau)));
    	this.setState({
    		hdthues: hdthue,
    		sortNgaylam: 1,
    	})
    }

    sortByNgayketthucAsc() {
    	let hdthue = this.state.hdthues.sort((a,b) => (a.ngayketthuc.localeCompare(b.ngayketthuc)));
    	this.setState({
    		hdthues: hdthue,
    		sortNgayketthuc: 0,
    	})
    	console.log("sort", this.state);
    }

    sortByNgayketthucDesc() {
        let hdthue = this.state.hdthues.sort((a, b) => (b.ngayketthuc.localeCompare(a.ngayketthuc)));
    	this.setState({
    		hdthues: hdthue,
    		sortNgayketthuc: 1,
    	})
    }

    sortByThanhtoanAsc() {
    	let hdthue = this.state.hdthues.sort((a,b) => (a.thanhtoan.localeCompare(b.thanhtoan)));
    	this.setState({
    		hdthues: hdthue,
    		sortThanhtoan: 0,
    	})
    	console.log("sort", this.state);
    }

    sortByThanhtoanDesc() {
        let hdthue = this.state.hdthues.sort((a, b) => (b.thanhtoan.localeCompare(a.thanhtoan)));
    	this.setState({
    		hdthues: hdthue,
    		sortThanhtoan: 1,
    	})
    }

	render(){

		const {hdthues, isLoading, pageSize, currentPage, totalColumns, search, sortDV, sortNgaylam, sortNgayketthuc, sortThanhtoan} = this.state;
		//console.log("dv", DVs)

		if (isLoading) {
            return <p className="text-primary align-middle text-center">
                    <i className="fas fa-spinner fa-pulse fa-4x fa-fw" />
                    Loading...
                  </p>;
        }

        const hdthueList = hdthues.map(hdthue =>{
        	return <tr key={hdthue.idhdthue}>
						<td className="text-center">{hdthue.idhdthue}</td>
						<td className="text-center">{hdthue.tendv}</td>
						<td className="text-center">{hdthue.tenKH}</td>
                        <td className="text-center">{hdthue.tenNGV}</td>
                        <td className="text-center">{this.formatter.format(Date.parse(hdthue.ngaybatdau))}</td>
                        <td className="text-center">{this.formatter.format(Date.parse(hdthue.ngayketthuc))}</td>
                        <td className="text-center">{hdthue.thanhtoan=='true'?<i className="fas fa-check-circle text-success"/>:null}</td>
                        <td className="text-center">
                        	<div class="btn-group" role="group" aria-label="Basic example">
	                        	<Link to={"/hdthue/"+hdthue.idhdthue}>
								  <button type="button" class="btn btn-outline-primary" title="C???p nh???t">
								  	<i className="fas fa-pencil-alt" />
								  </button>
								</Link>

							  {/*<button type="button" class="btn btn-outline-danger" onClick={this.handleClick.bind(this,hdthue.idhdthue)} title="X??a">
							  	<i className="fas fa-trash" />
							  </button>*/}
							</div>                       	
                        </td>
					</tr>

        });

		return(
			<div className="content-wrapper">

				<div className="content-header">
		          <div className="container-fluid">
		            <div className="row mb-2">
		              <div className="col-sm-6">
		                <h1 className="m-0">Danh s??ch h???p ?????ng thu?? d???ch v???</h1>
		              </div>{/* /.col */}
		              
		            </div>{/* /.row */}

					 <div className="pb-2 pt-2">      
			            <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">				  
						  <div className="input-group">
						  	<form className="form-inline" onSubmit={this.searchSubmit}>
						  	  <div className="input-group">
								  <input className="form-control" type="search" placeholder="Nh???p t??n c???n t??m..." 
								  onChange={this.searchChange} aria-label="Search" />
								  <div className="input-group-append">
								    <button className="btn bg-secondary rounded-right" type="submit">
				                      <i className="fas fa-search" />
				                    </button>
								  </div>
							  </div>
							 </form>
						  </div>
						</div>		
					</div>		           

		          </div>{/* /.container-fluid */}
		        </div>

				{/* Page Heading */}
				<div className="content">
					<div className="container-fluid">
						<table className="table table-bordered table-hover table-inverse table-striped">
							<thead className="thead-dark">
								<tr className="">
									<th className="text-center" scope="col">M?? H??</th>
									<th className="text-center align-middle" scope="col">D???ch v???{' '}
										{sortDV===1?
	                                    	<i className="fas fa-arrow-alt-circle-up text-info pointer" onClick={this.sortByDVAsc}/>
	                                    	: <i className="fas fa-arrow-alt-circle-down text-info pointer" onClick={this.sortByDVDesc}/>
	                                    }
									</th>
									<th className="text-center align-middle">H??? t??n KH</th>
									<th className="text-center align-middle">H??? t??n NGV</th>
									<th className="text-center">Ng??y l??m{' '}
										{sortNgaylam===1?
	                                    	<i className="fas fa-arrow-alt-circle-up text-info pointer" onClick={this.sortByNgaylamAsc}/>
	                                    	: <i className="fas fa-arrow-alt-circle-down text-info pointer" onClick={this.sortByNgaylamDesc}/>
	                                    }
									</th>
									<th className="text-center">Ng??y k???t th??c{' '}
										{sortNgayketthuc===1?
	                                    	<i className="fas fa-arrow-alt-circle-up text-info pointer" onClick={this.sortByNgayketthucAsc}/>
	                                    	: <i className="fas fa-arrow-alt-circle-down text-info pointer" onClick={this.sortByNgayketthucDesc}/>
	                                    }
									</th>
									<th className="text-center">Thanh to??n{' '}
										{sortThanhtoan===1?
											<i className="fas fa-arrow-alt-circle-up text-info pointer" onClick={this.sortByThanhtoanAsc}/>
	                                    	: <i className="fas fa-arrow-alt-circle-down text-info pointer" onClick={this.sortByThanhtoanDesc}/>
										}
									</th>
									<th className="text-center"></th>
								</tr>
							</thead>
							<tbody>
								{hdthueList}
							</tbody>
						</table>
					</div>

					<div className="container-fluid ">
		                <div className="Page navigation example d-flex justify-content-center">
							<ReactPaginate
								containerClassName="paging-container"
								pageClassName="paging-container__item"
								activeClassName="paging-container__item active"
								previousClassName="paging-container__item previous"
								nextClassName="paging-container__item next"
								pageLinkClassName="link"
								previousLabel={<span>{'<'}</span>}
								nextLabel={<span>{'>'}</span>}
								marginPagesDisplayed={currentPage}
								onPageChange={this.handlePaging.bind(this)}
								pageRangeDisplayed={pageSize}
								pageCount={totalColumns} />
				 		</div>
		            </div>
				</div>
				
			</div>
		);
	}
}
export default listhdthue;
