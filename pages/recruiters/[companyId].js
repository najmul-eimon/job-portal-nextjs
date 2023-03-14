import { companies } from '@/data/company';
import Head from 'next/head';
import CompanyBanner from '@/components/singleCompany/CompanyBanner';
import CompanyDetails from '@/components/singleCompany/companyDetails/CompanyDetails';

const SingleCompany = ({singleCompany}) => {
  return (
    <>
      <Head>
        <title>Job Portal | Company Details</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CompanyBanner singleCompany={singleCompany}/>
      <CompanyDetails singleCompany={singleCompany}/>
    </>
  )
}

export default SingleCompany;

export const getStaticProps = async (context) => {
  const param = context.params.companyId;
  const data = companies.find(({id}) => id === param);

  return{
    props : {
      singleCompany: data
    }
  }
}

export const getStaticPaths = async () => {
  const paths = companies.map((company) => {
    return {
      params: {
        companyId: company.id
      }
    }
  })

  return {paths, fallback: false}
}