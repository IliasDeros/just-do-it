# Deploy Automatically

In order for Github Actions to deploy on every commit to `main`, configure repository secrets and vercel project.

## Configure VERCEL_TOKEN

1. Navigate to your [Vercel Tokens]
2. Click "Create Token" and create a token

<img src="https://i.imgur.com/sviTHHe.png" alt="https://imgur.com/a/CjoFGhf" />

3. Store that token in your repository's secrets (https://github.com/{organization}/{project}/settings/secrets/actions/new):

<img src="https://i.imgur.com/PbuI3Bz.png" alt="https://imgur.com/a/klEFsyg" />

[vercel tokens]: https://vercel.com/account/tokens

## Configure VERCEL_APP_NAME

Add another [repository secret](https://github.com/{organization}/{project}/settings/secrets/actions/new) for `VERCEL_APP_NAME`. 
Give it a unique name, for example this template is called `rttemplate`

## Troubleshooting

### Vercel Build Error 

If vercel build fails due to a parcel error, make sure to select "Other" as framework preset:

![Vercel Screenshot](https://i.imgur.com/OMWxVfL.png)
